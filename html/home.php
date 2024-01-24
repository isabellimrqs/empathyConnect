<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmpathyConnect</title>
    <link rel="stylesheet" href="../css/style_social.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
</head>
<body>
<div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
      <script>
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      </script>
    <?php
        session_start();

    // Verifica se o usuário está autenticado
    if (isset($_SESSION['cargo'])) {
        $cargo = $_SESSION['cargo'];
        // Você pode adicionar mais lógica aqui, se necessário
    } else {
        // Se o usuário não estiver autenticado ou o cargo não estiver disponível, pode exibir uma mensagem alternativa ou tomar outras ações
        $cargo = "Cargo não disponível";
    }
    ?>
    <!-- Início do Header -->
    <div class="header">

        <!--Header Left-->
        <div class="header_left">
            <img src="../img/ec.png" alt="logo">
        <div class="header_search">
            <i class="material-icons"  style="color: #527196;">search</i>
            <input type="text">
        </div>
        </div>

        <!--Header Left-->
        <div class="header_right">
            <div class="headerOption">
                <a href="index.html"><i class="material-icons headerOption_icon" > home </i></a>
            </div>
            <div class="headerOption">
                <i class="material-icons headerOption_icon" > chat </i>
            </div>
            <div class="headerOption">
                <i class="material-icons headerOption_icon" > notifications </i>
            </div>
        </div>

    </div> <!--Fim do header-->

    <!--Corpo do Linkedin-->
    <div class="body_main">
        <!--Side Bar-->
        <div class="sidebar">
            <!--Topo do Sidebar-->
            <div class="sidebar_top">
                <img src="../img/faixa.svg" alt="Background Profile">
                <i class="material-icons sidebar_topAvatar" style="color:rgba(71, 176, 205, 0.53); font-size: 40px;"> account_circle </i>
                <h2><?php echo $_SESSION['nome']; ?></h2>
                <h4><?php echo isset($_SESSION['cargo']) ? $_SESSION['cargo'] : ''; ?></h4>

            </div> <!--Fim do Topo do Sidebar-->

        

        <div class="sidebar_bottom">
            <p>Recent</p>

            <div class="sidebar_recentItem">
                <span class="sidebar_hash">#</span>
                <p>Tópico 1</p>
            </div>

            <div class="sidebar_recentItem">
                <span class="sidebar_hash">#</span>
                <p>Tópico 2</p>
            </div>

            <div class="sidebar_recentItem">
                <span class="sidebar_hash">#</span>
                <p>Tópico 3</p>
            </div>
        </div> <!--Fim do Sidebar Bottom-->

    </div> <!--Fim do Sidebar -->

    <!--Início do Feed-->
    <div class="feed">
        <!--Início Container Input-->
        <div class="feed_input_container">
            <div class="feed_input">
                <i class="material-icons" >create</i>
                <form >
                    <input type="text">
                    <button type="submit">Send</button>
                </form>
            </div>

            <!--Opções de Input-->
            <div class="feed_inputOptions">
                <div class="inputOption">
                     <i style="color: rgb(97, 97, 240);" class="material-icons">insert_photo</i> 
                    <h4>Imagens</h4> 
                </div>

                <div class="inputOption">
                    <i style="color: rgb(222, 255, 56);" class="material-icons">subscriptions</i> 
                   <h4>Vídeo</h4> 
               </div>

               <div class="inputOption">
                    <i style="color: rgb(63, 194, 92);" class="material-icons">event_note</i> 
                    <h4>Eventos</h4> 
                </div>

                <div class="inputOption">
                    <i style="color: rgb(98, 98, 135);" class="material-icons">calendar_view_day</i> 
                    <h4>Escrever Artigo</h4> 
                </div>

            </div> <!--Fim das Opções de Input-->

        </div> <!--Fim do Container Input-->
    

        <!--Início dos Posts-->
        <div class="post">
            <!--Início do Header do Post-->
            <div class="post_header">
                <i class="material-icons"  style="color:rgba(71, 176, 205, 0.53); font-size: 40px;">account_circle</i>
                <div class="post_info">
                    <h2>Bosch Brasil</h2>
                    <p>1,754,682 seguidores</p>
                </div>
            </div> <!--Fim do Header do Post-->

            <!--Corpo do Post-->
            <div class="post_body">
                <p>Este vídeo destaca os sinais da ansiedade, abordando inquietação, tremores, insônia e isolamento social. Fique atento! 😉
                </p>
            </div> <!--Fim do Corpo do Post-->

            <!--Início das opçoes do post-->
            <div class="feed_inputOptions">
                <div class="inputOption">
                    <i style="color: gray;"class="material-icons">thumb_up</i>
                    <h4>Curtir</h4>
                </div>
                <div class="inputOption">
                    <i style="color: gray;"class="material-icons">comment</i>
                <h4>Comentar</h4>
                </div>
                <div class="inputOption">
                    <i style="color: gray;"class="material-icons">share</i>
                <h4>Compartilhar</h4>
                </div>
            </div> <!--Fim das opçoes de post-->
        </div> 


               <!--Início dos Posts-->
               <div class="post">
                <!--Início do Header do Post-->
                <div class="post_header">
                    <i class="material-icons"  style="color:rgba(71, 176, 205, 0.53); font-size: 40px;">account_circle</i>
                    <div class="post_info">
                        <h2>Cláudio Gomes</h2>
                        <p>Gerente de TI</p>
                    </div>
                </div> <!--Fim do Header do Post-->
    
                <!--Corpo do Post-->
                <div class="post_body">
                    <p>Este é meu relato de como venci a depressão Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero justo. Quisque tincidunt, justo vel varius fermentum, eros purus eleifend dolor, in rhoncus nisi leo eu justo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero justo. Quisque tincidunt, justo vel varius fermentum, eros purus eleifend dolor, in rhoncus nisi leo eu justo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero justo. Quisque tincidunt, justo vel varius fermentum, eros purus eleifend dolor, in rhoncus nisi leo eu justo.




                    </p>
                </div> <!--Fim do Corpo do Post-->
    
                <!--Início das opçoes do post-->
                <div class="feed_inputOptions">
                    <div class="inputOption">
                        <i style="color: gray;"class="material-icons">thumb_up</i>
                        <h4>Curtir</h4>
                    </div>
                    <div class="inputOption">
                        <i style="color: gray;"class="material-icons">comment</i>
                    <h4>Comentar</h4>
                    </div>
                    <div class="inputOption">
                        <i style="color: gray;"class="material-icons">share</i>
                    <h4>Compartilhar</h4>
                    </div>
                </div> <!--Fim das opçoes de post-->
            </div> 

            <div class="post">
                <!--Início do Header do Post-->
                <div class="post_header">
                    <i class="material-icons"  style="color:rgba(71, 176, 205, 0.53); font-size: 40px;">account_circle</i>
                    <div class="post_info">
                        <h2>Larissa Pereira</h2>
                        <p>Analista de controladoria</p>
                    </div>
                </div> <!--Fim do Header do Post-->
    
                <!--Corpo do Post-->
                <div class="post_body">
                    <p> Boa tarde, Pessoal! <br>
                        Algumas dicas de como faço para amenizar minhas crises de pânico: <br>
                        - Lorem ipsum, dolor sit amet consectetur adipisicing elit.  <br>
                        - Totam adipisci debitis iusto veniam asperiores voluptatibus.<br>
                        - Autem, perspiciatis atque doloribus quasi sit tenetur necessitatibus ut accusantium fugit neque ab rem harum
                    </p>
                </div> <!--Fim do Corpo do Post-->
    
                <!--Início das opçoes do post-->
                <div class="feed_inputOptions">
                    <div class="inputOption">
                        <i style="color: gray;"class="material-icons">thumb_up</i>
                        <h4>Curtir</h4>
                    </div>
                    <div class="inputOption">
                        <i style="color: gray;"class="material-icons">comment</i>
                    <h4>Comentar</h4>
                    </div>
                    <div class="inputOption">
                        <i style="color: gray;"class="material-icons">share</i>
                    <h4>Compartilhar</h4>
                    </div>
                </div> <!--Fim das opçoes de post-->
            </div> 
    
    
    
        </div> <!--Fim dos posts-->

        <!--Início do Widget-->
        <div class="widgets">
            <div class="widgets_header">
                <h2>Top Artigos</h2>
                <i class="material-icons">info</i>
            </div>
            <div class="widgets_article">
                <div class="widgets_articleLeft">
                    <i class="material-icons">fiber_manual_record</i>
                </div>

                <div class="widgets_articleRight">
                    <h4>Bosch Brasil</h4>
                    <p>Top Notícias</p>
                </div>
            </div>

            <div class="widgets_article">
                <div class="widgets_articleLeft">
                    <i class="material-icons">fiber_manual_record</i>
                </div>

                <div class="widgets_articleRight">
                    <h4>Saúde Mental</h4>
                    <p>Top Notícias</p>
                </div>
            </div>

            <div class="widgets_article">
                <div class="widgets_articleLeft">
                    <i class="material-icons">fiber_manual_record</i>
                </div>

                <div class="widgets_articleRight">
                    <h4>Qualidade de Vida</h4>
                    <p>Top Notícias</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>