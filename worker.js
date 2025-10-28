// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      if (path === '/api/github/user') {
        return await handleUserRequest(env, corsHeaders);
      }
      
      if (path === '/api/github/repos') {
        return await handleReposRequest(env, corsHeaders);
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};

async function handleUserRequest(env, corsHeaders) {
  const response = await fetch('https://api.github.com/users/itzreggie', {
    headers: {
      'Authorization': `token ${env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Reggie'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

async function handleReposRequest(env, corsHeaders) {
  try {
    const [userRepos, forwardAppRepo, sosaWebsiteRepo, eventSyncRepo] = await Promise.all([
      fetch('https://api.github.com/users/itzreggie/repos?sort=updated&per_page=50', {
        headers: {
          'Authorization': `token ${env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Reggie'
        }
      }),
      fetch('https://api.github.com/repos/ForwardApp/ForwardApp', {
        headers: {
          'Authorization': `token ${env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Reggie'
        }
      }),
      fetch('https://api.github.com/repos/SoSA-ry-Guild/sosa-website', {
        headers: {
          'Authorization': `token ${env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Reggie'
        }
      }),
      fetch('https://api.github.com/repos/SoSA-ry-Guild/EventSync', {
        headers: {
          'Authorization': `token ${env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Reggie'
        }
      })
    ]);

    if (!userRepos.ok) {
      throw new Error(`GitHub API error: ${userRepos.status}`);
    }

    const userReposData = await userRepos.json();
    let allRepos = [...userReposData];

    if (forwardAppRepo.ok) {
      const forwardAppData = await forwardAppRepo.json();
      allRepos.push(forwardAppData);
    }

    if (sosaWebsiteRepo.ok) {
      const sosaWebsiteData = await sosaWebsiteRepo.json();
      allRepos.push(sosaWebsiteData);
    }

    if (eventSyncRepo.ok) {
      const eventSyncData = await eventSyncRepo.json();
      allRepos.push(eventSyncData);
    }

    return new Response(JSON.stringify(allRepos), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error.message}`);
  }
}