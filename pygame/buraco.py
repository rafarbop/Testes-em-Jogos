import pygame
from pygame import display,locals,event,time,draw,key,font

pygame.init()

class ObjetoPlayer1():
    def __init__(self,pos_x,pos_y,screen):
        self.pos_x = pos_x
        self.pos_y = pos_y
        self.screen = screen
        self.raio = 30
        self.velocidade = 10
        self.color = (220,220,220)
    def draw_obj(self):
        draw.circle(self.screen,self.color,(self.pos_x,self.pos_y),self.raio)
    def new_x(self,velocidade):
        self.pos_x = self.pos_x + velocidade
    def new_y(self,velocidade):
        self.pos_y= self.pos_y + velocidade
    def x_now(self):
        return (self.pos_x)
    def y_now(self):
        return (self.pos_y)




screen = display.set_mode((800,600))
display.set_caption("Testando Jogos com Pygame")

txtGameOver = "Parabéns, voçe ganhou!"
font.init()
font_usar =  font.SysFont("Arial", 30)
txtGameOverTela = font_usar.render(txtGameOver,True,(0,0,0))



screen_display = True
while screen_display:
    time.delay(50)
    for one_event in event.get():
        if one_event.type == locals.QUIT:
            screen_display = False
    
    player1 = ObjetoPlayer1(400,300,screen)
    player1.draw_obj()

    command_keyboard = key.get_pressed()
    if command_keyboard[locals.K_UP]:
        if player1.y_now() > 30:
            player1.new_y(-player1.velocidade)
    if command_keyboard[locals.K_DOWN]:
        if player1.y_now() < 570:
            player1.new_y(player1.velocidade)
    if command_keyboard[locals.K_LEFT]:
        if player1.x_now() > 30:
            player1.new_x(-player1.velocidade)
    if command_keyboard[locals.K_RIGHT]:
        if player1.x_now() < 770:
            player1.new_x(-player1.velocidade)
    
    draw.rect(screen,(0,200,200),((0,0),(800,600)))
    
    draw.circle(screen,(0,0,0,100),(770,570),30)
    
    display.update()
    
    if player1.x_now() == 770 and player1.y_now() == 570:
        screen.fill((255, 255, 255))
        screen.blit(txtGameOverTela, [400-txtGameOverTela.get_width()//2, 300-txtGameOverTela.get_height()//2])
        display.update()
        time.wait(500)

pygame.quit()