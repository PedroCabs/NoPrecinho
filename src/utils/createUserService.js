export default async function createUserService(email, password) {
  try {
    const response = await fetch({
      url: "http://localhost:3000/register",
      method: "POST",
      body: {
        email,
        password,
      },
    })

    if (!response) throw new Error("Deu erro no cadastro")

    return response.json()
  } catch (error) {
    throw new Error("Deu erro no cadastro" + error)
  }
}
