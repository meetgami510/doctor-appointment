export const userMenu = [
    {
        name: "Home",
        path: "/login",
        icon: "fa-solid fa-house",
    },

    {
        name: "Appointments",
        path: "/appointments",
        icon: "fa-solid fa-list",
    },
    {
        name: "Apply Doctor",
        path: "/apply-doctor",
        icon: "fa-solid fa-user-doctor",
    },
    {
        name: "SymptomChecker",
        path: "/symptomChecker",
        icon: "fa-solid fa-user-doctor",
    }
];

// admin menu
export const adminMenu = [
    {
        name: "Home",
        path: "/",
        icon: "fa-solid fa-house",
    },
    {
        name: "Doctors",
        path: "/admin/doctors",
        icon: "fa-solid fa-user-doctor",
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: "fa-solid fa-user",
    },
];

export const doctorMenu = [
    {
        name: "Home",
        path: "/",
        icon: "fa-solid fa-house",
    },
    {
        name: "Appointments",
        path: "/doctor-appointments",
        icon: "fa-solid fa-list",
    },
    {
        name: "Profile",
        path: `/doctor/profile`,
        icon: "fa-solid fa-user",
    },
];