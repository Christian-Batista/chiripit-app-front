import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem('jwtToken');
            if (token) {
                setIsAuthenticated(true);
            }
            setIsLoading(false);
        };
        checkAuth();
    }, []);

    return {isAuthenticated, loading};
}

export default useAuth;