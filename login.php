<?php
session_start();

// Database connection details
$host = 'localhost';
$db   = 'loginsystemdb';
$user = 'root';  // Default XAMPP MySQL username
$pass = '';      // Default XAMPP MySQL password
$charset = 'utf8mb4';

// Database connection options
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    // Create a PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Login function
function login($email, $password) {
    global $pdo;
    
    // Prepare SQL to prevent SQL injection
    $stmt = $pdo->prepare("SELECT * FROM loginid WHERE emailid = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    
    // Verify password (Note: In a real-world scenario, use password_hash and password_verify)
    if ($user && $user['password'] === $password) {
        // Login successful
        $_SESSION['user_id'] = $user['userid'];
        $_SESSION['username'] = $user['username'];
        return true;
    }
    
    return false;
}

// Registration function
function register($username, $email, $password) {
    global $pdo;
    
    try {
        // Prepare SQL to prevent SQL injection
        $stmt = $pdo->prepare("INSERT INTO loginid (username, emailid, password) VALUES (?, ?, ?)");
        $stmt->execute([$username, $email, $password]);
        return true;
    } catch (PDOException $e) {
        // Check for duplicate email
        if ($e->getCode() == '23000') {
            return 'Email already exists';
        }
        return false;
    }
}

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        if (login($email, $password)) {
            // Redirect to index.html after successful login
            header('Location: public/index.html');
            exit();
        } else {
            $loginError = "Invalid email or password";
        }
    }
    
    if (isset($_POST['register'])) {
        $username = $_POST['full_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];
        
        // Basic validation
        if ($password !== $confirm_password) {
            $registerError = "Passwords do not match";
        } else {
            $result = register($username, $email, $password);
            if ($result === true) {
                // Redirect to index.html after successful registration
                header('Location: public/index.html');
                exit();
            } elseif ($result === 'Email already exists') {
                $registerError = "Email is already registered";
            } else {
                $registerError = "Registration failed";
            }
        }
    }
}
?>