export type User = {
    name: string;
    username: string;
    email: string;
    permissions: string[];
};

export type LoginContextType = {
    isLogged: boolean;
    loggedUser: User;
};
