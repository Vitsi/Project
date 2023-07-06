import math
from OpenGL.GL import *
from OpenGL.GLUT import *
from OpenGL.GLU import *


# Global variables.
window_width = 500
window_height = 400

ball_x = 250
ball_y = 100
ball_radius = 20
ball_speed_x = 5
ball_speed_y = 5

paddle_x = 200
paddle_y = 300
paddle_width = 100
paddle_height = 10
paddle_direction = "right"

def init():
    glClearColor(0.0, 0.0, 0.0, 1.0)
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()
    gluOrtho2D(0, window_width, 0, window_height)

def draw_ball():
    glColor3f(0.7, 0.3, 1.0)
    glBegin(GL_POLYGON)
    for i in range(360):
        angle = i * math.pi / 180.0
        x1 = ball_x + ball_radius * math.cos(angle)
        y1 = ball_y + ball_radius * math.sin(angle)
        glVertex2f(x1, y1)
    glEnd()

def draw_paddle():
    glColor3f(1.0, 0.5, 0.6)
    glBegin(GL_QUADS)
    glVertex2f(paddle_x, paddle_y)
    glVertex2f(paddle_x + paddle_width, paddle_y)
    glVertex2f(paddle_x + paddle_width, paddle_y + paddle_height)
    glVertex2f(paddle_x, paddle_y + paddle_height)
    glEnd()

def draw_scene():
    glClear(GL_COLOR_BUFFER_BIT)

    draw_ball()
    draw_paddle()

    glutSwapBuffers()

def update_scene(value):
    global ball_x, ball_y, ball_speed_x, ball_speed_y, paddle_x, paddle_y, paddle_direction

    # Update ball position.
    ball_x += ball_speed_x
    ball_y += ball_speed_y

    # Check for collision with walls.
    if ball_x - ball_radius < 0 or ball_x + ball_radius > window_width:
        ball_speed_x = -ball_speed_x
    if ball_y + ball_radius > window_height:
        ball_speed_y = -ball_speed_y
    if ball_y - ball_radius < 0:
        ball_speed_y = -ball_speed_y

    # Check for collision with paddle.
    if ball_y - ball_radius < paddle_y + paddle_height and ball_x >= paddle_x and ball_x <= paddle_x + paddle_width:
        ball_speed_y = -ball_speed_y

    # Check if the ball is going out of the screen's boundaries.
    if ball_x - ball_radius < 0:
        ball_x = ball_radius
    elif ball_x + ball_radius > window_width:
        ball_x = window_width - ball_radius

    # Check if the ball has reached the bottom of the screen.
    if ball_y - ball_radius < 0:
        ball_y = ball_radius
    elif ball_y + ball_radius > window_height:
        ball_y = window_height - ball_radius

    # Update paddle position.
    if paddle_direction == "right":
        if paddle_x + paddle_width < window_width:
            # Move right until we reach the edge of the window.
            paddle_x += 2
        else:
            # Change direction when we reach the edge of the window.
            paddle_direction = "left"
    else:
        if paddle_x > 0:
            # Move left until we reach the edge of the window.
            paddle_x -= 2
        else:
            # Change direction when we reach the edge of the window.
            paddle_direction = "right"

    glutPostRedisplay()
    glutTimerFunc(10, update_scene, 0)

def main():
    glutInit()
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB)
    glutInitWindowSize(500, 400)
    glutCreateWindow("Bouncing Ball")
    
    glutDisplayFunc(draw_scene)
    
    init()
    
    # Start the animation loop.
    glutTimerFunc(10, update_scene, 0)

    # Keep the program running until the user quits.
    glutMainLoop()

if __name__ == "__main__":
   main()
