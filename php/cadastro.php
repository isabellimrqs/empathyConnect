<?php
session_start();
include "../php/conexao2.php";

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = isset($_POST["nome"]) ? $_POST["nome"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $senha = isset($_POST["senha"]) ? $_POST["senha"] : "";
    $cargo = isset($_POST["cargo"]) ? $_POST["cargo"] : "";

    // Adiciona $cargo à $_SESSION
    $_SESSION['cargo'] = $cargo;

    // Verifica se o e-mail já existe
    $sql1 = "SELECT email FROM usuario WHERE email='$email';";
    $existe = mysqli_query($conexao, $sql1);

    if ($existe && mysqli_num_rows($existe) > 0) {
        echo "<script>alert('E-MAIL já existe na base de dados!');</script>";
        echo "<script>window.location.href='../html/account.html';</script>";
    } else {
        // Insere os dados no banco de dados
        $sql2 = "INSERT INTO usuario (nome, email, senha, cargo) VALUES ";
        $sql2 .= "('$nome', '$email', '$senha', '$cargo');";

        $resultado = mysqli_query($conexao, $sql2);

        // Imprima o conteúdo do array $_SESSION para debug
var_dump($_SESSION);

        if ($resultado) {
            echo "<script>alert('Dados cadastrados com sucesso!');</script>";
            echo "<script>window.location.href='../html/account.html';</script>";
        } else {
            echo "<script>alert('Erro: " . mysqli_error($conexao) . "');</script>";
            echo "<script>window.location.href='../html/cadastroUsuario.html';</script>";
        }
    }
}

?>
