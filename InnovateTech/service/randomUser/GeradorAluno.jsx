export async function GeraAluno(page) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=50&nat=us&inc=name,gender,dob,picture,email,phone,location,id&seed=abc&page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error("Problema ao acessar servidor!");
    }
    const responseData = await response.json();
    return responseData.results;
  } catch (error) {
    console.log("Erro na operação:", error);
    throw error;
  }
}