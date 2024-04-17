import { createWebHashHistory, createRouter } from "vue-router";
import Home from"../components/Home.vue";
import LoginPage from "../components/LoginPage.vue";
import AttendancePage from "../components/Attendance.vue";
import AttendanceView from "../components/AttendanceView.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: Home,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/attendance",
        name: "AttendancePage",
        component: AttendancePage,
    },
    {
        path: "/attendanceview",
        name: "AttendanceView",
        component: AttendanceView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
