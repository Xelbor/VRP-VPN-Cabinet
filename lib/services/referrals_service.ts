const base_url = process.env.BASE_URL;
const token = localStorage.getItem("jwt");

export async function fetchReferrals(userId: string) {
  const response = await fetch(`${base_url}/api/refferals`, {
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