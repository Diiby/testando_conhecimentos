var larguraBotao = 140
var alturaBotao = 50
var xMinBotao = 270
var xMaxBotao = xMinBotao + larguraBotao
var yMinBotao1 = 150
var yMaxBotao1 = yMinBotao1 + alturaBotao
var yMinBotao2 = 210
var yMaxBotao2 = yMinBotao2 + alturaBotao
var yMinBotao3 = 270
var yMaxBotao3 = yMinBotao3 + alturaBotao


var nivel = 1
var escolhaFase = 0

var tela = 0

// Imagens

function preload(){
  imagemA = loadImage("daniel.jpg");
  imagemB = loadImage("fundo1.png");
  imagemC = loadImage("quizz9.jpg");
  imagemD = loadImage("quizz8.png");
  imagemE = loadImage("GameOver.jpg")
  imagemF = loadImage("win1.jpg")
  imagemG = loadImage("win2.jpg")
  imagemH = loadImage("win3.jpg")
}

// Tela Menu

function menuBotao(texto, yMin, yMax, opcao){
        // Botao2
    
    fill(145,158,255);
    if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax){
      fill(197,201,253)
      if(mouseIsPressed){
        tela = opcao
      }
    }
    rect(xMinBotao, yMin , larguraBotao, alturaBotao, 16);
    fill(0)
    textSize(25)
    text(texto, xMinBotao + 70, yMin + 33);
}

function telaMenu(){
    background(220);
    textSize(35);
    image(imagemD,0,0)
    textAlign(CENTER)
    textFont('fantasy')
    fill(255,215,0);
    text("Testando Conhecimentos",340, 100);
  
    menuBotao("Jogar", yMinBotao1,yMaxBotao1, 1)
  
    menuBotao("Instruções",yMinBotao2,yMaxBotao2, 2)

    menuBotao("Créditos",yMinBotao3,yMaxBotao3, 3)
}


  // TelaJogo

function opcaoBotao(texto, xMin, xMax, yMin, yMax, largura, altura, opcao){
        // Botao2
    
    fill(145,158,255);
    if(mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
      fill(197,201,253)
      if(mouseIsPressed){
        escolhaFase = opcao
      }
    }
    rect(xMin, yMin , largura, altura, 7);
    fill(0)
    textSize(22)
    text(texto, xMin + 78, yMin + 23)
  
}

function telaNivel1(){
  background(220);
  textSize(30)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Qual é o continente do país Hungria?", 350,150);
  
  escolhaFase = 0
  
  opcaoBotao("África",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("Europa",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("Ásia",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("Oceania",427, 597, 293, 323, 160, 30, 4) 
}

function telaNivel2(){
  background(220);
  textSize(30)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Quem foi o primeiro país a \n ganhar uma copa do mundo?", 350,133);
  
  escolhaFase = 0
  
  opcaoBotao("Inglaterra",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("Brasil",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("Uruguai",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("Alemanha",427, 597, 293, 323, 160, 30, 4) 
}

function telaNivel3(){
  background(220);
  textSize(30)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Qual o valor da equação:\n 10x+600=5x?", 350,133);
  
  escolhaFase = 0
  
  opcaoBotao("-120",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("40",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("-40",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("+120",427, 597, 293, 323, 160, 30, 4) 

}  

function telaNivel4(){
  background(220);
  textSize(30)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Quanto tempo durou a Guerra Fria?", 350,150);
  
  escolhaFase = 0
  
  opcaoBotao("1949 a 1995",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("1945 a 1992",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("1947 a 1991",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("1950 a 1993",427, 597, 293, 323, 160, 30, 4) 

} 

function telaNivel5(){
  background(220);
  textSize(28)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Complete:\n She____like to drink coffee,\n she likes tea.", 350,118);
  
  escolhaFase = 0
  
  opcaoBotao("not",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("don't",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("do",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("doesn't",427, 597, 293, 323, 160, 30, 4) 

} 

function telaNivel6(){
  background(220);
  textSize(28)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Complete:\n I'm going to____coffee.\n Would you like some?", 350,118);
  
  escolhaFase = 0
  
  opcaoBotao("do",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("make",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("does",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("makes",427, 597, 293, 323, 160, 30, 4) 

} 

function telaNivel7(){
  background(220);
  textSize(28)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Cuál es la traducción de la palabra:\n ''Crianza''\n en portugués?", 350,118);
  
  escolhaFase = 0
  
  opcaoBotao("Criação",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("Criança",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("Bebê",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("Pequeno",427, 597, 293, 323, 160, 30, 4) 

} 

function telaNivel8(){
  background(220);
  textSize(30)
  textAlign(CENTER)
  textFont('sans-serif	')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Em que país surgiu o café?", 350,150);
  
  escolhaFase = 0
  
  opcaoBotao("Arábia",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("Brasil",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("Etiópia",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("EUA",427, 597, 293, 323, 160, 30, 4) 

} 

function telaNivel9(){
  background(220);
  textSize(30)
  textAlign(CENTER)
  textFont('sans-serif')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("De quem é a famosa frase \n “Penso, logo existo”?", 350,135);
  
  escolhaFase = 0
  
  opcaoBotao("Platão",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("Galileu Galilei",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("Sócrates",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("Descartes",427, 597, 293, 323, 160, 30, 4) 

} 

function telaNivel10(){
  background(220);
  textSize(28)
  textAlign(CENTER)
  textFont('sans-serif')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Atualmente, quantos elementos \nquímicos a tabela periódica possui?", 350,135);
  
  escolhaFase = 0
  
  opcaoBotao("118",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("113",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("109",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("110",427, 597, 293, 323, 160, 30, 4) 

} 

function telaNivel11(){
  background(220);
  textSize(28)
  textAlign(CENTER)
  textFont('sans-serif')
  image(imagemC, 0 , 0)
  fill(255,215,0);
  text("Quando é comemorado o dia do \n''Programador''?", 350,135);
  
  escolhaFase = 0
  
  opcaoBotao("25 de abril",137, 297, 229, 259, 160, 30, 1)
  opcaoBotao("13 de janeiro ",427, 597, 229, 259, 160, 30, 2)
  opcaoBotao("12 junho",137, 297, 293, 323, 160, 30, 3)
  opcaoBotao("13 de setembro",427, 597, 293, 323, 160, 30, 4) 

} 


function telaVitoria(){
  background(220);
  image(imagemH, 0 , 0)
  
  escolhaFase = 0

}

function telaInstruções(){
  background(220);
  textSize(40);
  textAlign(LEFT)
  textFont('sans-serif')
  image(imagemB,0,0)
  fill(0);
  text("Instruções", 240, 70);
  textSize(18,5);
  text("1° → O objetivo do jogo é responder as perguntas que forem feitas, testando seu conhecimento de mundo. Caso acerte, avança de fase, se errar é Gameover. ", 30, 142, 660);
  text("2° → Para jogar, deve-se usar o mouse.", 30, 198, 550)
  text("3° → Quando chegar na resposta, pressione o click esquerdo do mouse.", 30, 232, 600);
  textSize(22);
  text("Aperte ESC para voltar.", 235, 380);
}

function telaCreditos(){
  background(220);
  image(imagemB,0,0)
  textSize(40);
  textAlign(LEFT)
  textFont('sans-serif')
  fill(0)
  text("Créditos", 260,70);
  textSize(18);
  fill(15)
  text("Nome: Daniel Rannyeri da Silva Rocha", 240, 180);
  textSize(18);
  text("Função: Graduando do BCT/UFRN", 240, 202);
  image(imagemA,110, 140);
  fill(0)
  textSize(22);
  text("Aperte ESC para voltar.", 235, 380);
}

//Telas de sequencia

function telaGameOver(){
  background(220)
  image(imagemE,0,0)
  textSize(30)
  textAlign(LEFT)
  fill(10000)
  text("Aperte ESC para voltar.", 200, 380)
  
}

function mouseClicked(){
  if(tela == 1 && nivel == 1){
    if (escolhaFase == 1 || escolhaFase == 3 || escolhaFase == 4){
      tela = 4
    }
    if(escolhaFase == 2){
      nivel = 2
      
    }
  }
  else{
    if(tela == 1 && nivel == 2){
      if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 4){
        tela = 4
      }
      if(escolhaFase == 3){
        nivel = 3
        
      }
      else{
        if(tela == 4 && nivel == 2){
          nivel = 1
        }
      }
    }
      else{
         if(tela == 1 && nivel == 3){
           if(escolhaFase == 2 || escolhaFase == 3 || escolhaFase == 4){
            tela = 4
          }
          if(escolhaFase == 1){
            nivel = 4
          }
           else{
             if(tela == 4 && nivel == 3){
               nivel = 1
             }
           }
        }
        else{
         if(tela == 1 && nivel == 4){
           if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 4){
            tela = 4
          }
          if(escolhaFase == 3){
            nivel = 5
          }
           else{
             if(tela == 4 && nivel == 4){
               nivel = 1
             }
           }
      }
        else{
         if(tela == 1 && nivel == 5){
           if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 3){
            tela = 4
          }
          if(escolhaFase == 4){
            nivel = 6
          }
           else{
             if(tela == 4 && nivel == 5){
               nivel = 1
             }
           }
      }
        else{
         if(tela == 1 && nivel == 6){
           if(escolhaFase == 1 || escolhaFase == 3 || escolhaFase == 4){
            tela = 4
          }
          if(escolhaFase == 2){
            nivel = 7
          }
           else{
             if(tela == 4 && nivel == 6){
               nivel = 1
             }
           }
      }
        else{
         if(tela == 1 && nivel == 7){
           if(escolhaFase == 2 || escolhaFase == 3 || escolhaFase == 4){
            tela = 4
          }
          if(escolhaFase == 1){
            nivel = 8
          }
           else{
             if(tela == 4 && nivel == 7){
               nivel = 1
             }
           }
      }
         else{
         if(tela == 1 && nivel == 8){
           if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 4){
            tela = 4
          }
          if(escolhaFase == 3){
            nivel = 9
          }
           else{
             if(tela == 4 && nivel == 8){
               nivel = 1
             }
           }
      }
         else{
         if(tela == 1 && nivel == 9){
           if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 3){
            tela = 4
          }
          if(escolhaFase == 4){
            nivel = 10
          }
           else{
             if(tela == 4 && nivel == 9){
               nivel = 1
             }
           }
      }
        else{
         if(tela == 1 && nivel == 10){
           if(escolhaFase == 2 || escolhaFase == 3 || escolhaFase == 4){
            tela = 4
          }
          if(escolhaFase == 1){
            nivel = 11
          }
           else{
             if(tela == 4 && nivel == 10){
               nivel = 1
             }
           }
      }
        else{
         if(tela == 1 && nivel == 11){
           if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 3){
            tela = 4
          }
          if(escolhaFase == 4){
            nivel = 12
          }
           else{
             if(tela == 4 && nivel == 11){
               nivel = 1
             }
           }
      }
          else{
            if(tela == 1 && nivel == 12){
              nivel = 1
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 }
} 


function setup() {
  createCanvas(700, 400);
  
}
    
// transitar nas telas

function draw(){
  background(220)
  if(tela == 0)
    telaMenu();
    
  if(tela == 1){
    if(nivel == 1){
      telaNivel1();
    }
    if(nivel == 2){
      telaNivel2();
    }
    if(nivel == 3){
      telaNivel3();
    }
    if(nivel == 4){
      telaNivel4()
    }
    if(nivel == 5){
      telaNivel5()
    }
    if(nivel == 6){
      telaNivel6()
    }
    if(nivel == 7){
      telaNivel7()
    }
    if(nivel == 8){
      telaNivel8()
    }
    if(nivel == 9){
      telaNivel9()
    }
    if(nivel == 10){
      telaNivel10()
    }
    if(nivel == 11){
      telaNivel11()
    }
    if(nivel == 12){
      telaVitoria()
    }
    
    
    
  }
  
  if(tela == 2){
    telaInstruções();
  }
  
  if(tela == 3){
    telaCreditos();
  }
  if(tela == 4){
    telaGameOver();
  }
  if(tela == 5){
    telaNivel2()
  }
  if(tela == 6){
    telaNivel3()
  }
  if(tela == 7){
    telaNivel4()
  }
  if(tela == 8){
    telaNivel5()
  }
  if(tela == 9){
    telaNivel6()
  }
  if(tela == 10){
    telaNivel7()
  }
  if(tela == 11){
    telaNivel8()
  }
  if(tela == 12){
    telaNivel9()
  }
  if(tela == 13){
    telaNivel10()
  }
  if(tela == 14){
    telaNivel11()
  }
  if(tela == 15){
    telaVitoria()
  }
  
 
}

// Usar o ESC

function keyPressed(){
  if(tela == 1 || tela == 2 ||tela == 3 ||tela == 4 ||tela == 5 ||tela == 6 || tela == 7 || tela == 8 || tela == 9 || tela == 10 || tela == 11 || tela == 12 || tela == 13 || tela == 14 || tela == 15){
    if(keyCode == ESCAPE){
       tela = 0
      
       }
  }
}