<?php
session_start(); // Certifique-se de iniciar a sessão no início do arquivo

include('../php/conexao.php');

if(isset($_POST['email']) && isset($_POST['senha'])) {

    if(empty($_POST['email'])) {
        echo "Preencha seu e-mail";
    } elseif(empty($_POST['senha'])) {
        echo "Preencha sua senha";
    } else {

        $email = $mysqli->real_escape_string($_POST['email']);
        $senha = $mysqli->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM usuario WHERE email = '$email'";
        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1) {
            
            $usuario = $sql_query->fetch_assoc();

            if ($senha === ($usuario['senha'])) {

                $_SESSION['email'] = $usuario['email'];
                $_SESSION['senha'] = $usuario['senha'];
                $_SESSION['nome'] = $usuario['nome']; // Adiciona o nome à sessão

                header("Location: ../html/home.php");
                exit(); // Certifique-se de sair após o redirecionamento

            } else {
                echo "Falha ao logar! E-mail ou senha incorretos";
            }

        } else {
            echo "Falha ao logar! E-mail ou senha incorretos";
        }

    }

}
?>
