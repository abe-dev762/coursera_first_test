let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
    console.log("Access Level:", accessLevel);
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
    console.log(accessLevel);
} else {
    accessLevel = "Access denied";
    console.log(accessLevel);
}

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    }
    else {
        userMessage = "Welcome, Manager!";
    }
} else {
    userMessage = "Please login to access the system";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
     case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    case "default":
        userCategory = "Unkown";
}
console.log("User Category:", userCategory)

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus)