<?php
    session_start();
    
    $conexao = mysqli_connect('localhost', 'root', "");
    $db = mysqli_select_db($conexao, 'banco_hackathon');//variavel de conexao e nome do banco de dados
?>
