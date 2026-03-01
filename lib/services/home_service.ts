const base_url = process.env.BASE_URL;
const token = localStorage.getItem("jwt");

export async function fetchHome(userId: string) {
  const response = await fetch(`${base_url}/api/home`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ user_id: userId }),
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}

export async function deleteDevice(userId: string, hwid: string) {
  const response = await fetch(`${base_url}/api/delete_hwid_user`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ user_id: userId, hwid }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
}