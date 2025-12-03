
// mock
export function useAuth() {
  return {
    logout: () => {
      console.log("logout")
    },
    user: {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "admin",
    },
  }
}