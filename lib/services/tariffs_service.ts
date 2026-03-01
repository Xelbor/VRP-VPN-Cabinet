const base_url = 'http://127.0.0.1:5000';
const token = localStorage.getItem("jwt");

export async function buyKey(userId: string, tariff: string) {
  const response = await fetch(`${base_url}/api/buykey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ user_id: Number(userId), tariff: tariff }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || `HTTP error ${response.status}`);
  }

  return data;
}