const { useContext } = require("react")
const { AuthContext } = require("../context/AuthProvider")

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;