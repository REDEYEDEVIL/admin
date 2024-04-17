import { createWebHistory, createRouter } from "vue-router"; 
import Home from"../components/Home.vue";
import LoginPage from "../components/LoginPage.vue";
import AttendancePage from "../components/Attendance.vue";
const routes =[ 
    { 
        path: "/", 
        name: "HomePage", 
        component: Home, 
    },  
    { 
        path: "/Login", 
        name: "LoginPage", 
        component: LoginPage,
    }, 
    { 
        path: "/attendance", 
        name: "AttendancePage", 
        component: AttendancePage,
    }, 
]; 

const router = createRouter({ history: createWebHistory(), routes, });
export default router;
