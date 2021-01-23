import pygame
from pygame import display,locals,event,time,draw,key,font

pygame.init()
x_obj1 = 400
y_obj1 = 300
vel_obj1 = 10


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
        
    command_keyboard = key.get_pressed()
    if command_keyboard[locals.K_UP]:
        if y_obj1 > 30:
            y_obj1 -= vel_obj1
    if command_keyboard[locals.K_DOWN]:
        if y_obj1 < 570:
            y_obj1 += vel_obj1
    if command_keyboard[locals.K_LEFT]:
        if x_obj1 > 30:
            x_obj1 -= vel_obj1
    if command_keyboard[locals.K_RIGHT]:
        if x_obj1< 770:
            x_obj1 += vel_obj1
    
    draw.rect(screen,(0,200,200),((0,0),(800,600)))
    draw.circle(screen,(200,200,0),(x_obj1,y_obj1),30)
    draw.circle(screen,(0,0,0,100),(770,570),30)

    
    display.update()
    
    if x_obj1 == 770 and y_obj1 == 570:
        screen.fill((255, 255, 255))
        screen.blit(txtGameOverTela, [400-txtGameOverTela.get_width()//2, 300-txtGameOverTela.get_height()//2])
        display.update()
        time.wait(500)

pygame.quit()