const base_url = process.env.BASE_URL;

function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("jwt");
}

export async function fetchBalance(userId: string) {
  const token = getToken();

  const response = await fetch(`${base_url}/api/balance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ user_id: userId }),
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}

export async function сhargeBalance(userId: string, amount: number, method: string) {
  const token = getToken();
  
  const response = await fetch(`${base_url}/api/chargeBalance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ user_id: userId, amount, method }),
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}