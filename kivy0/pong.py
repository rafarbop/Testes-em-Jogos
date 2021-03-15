from kivy.app import App
from kivy.uix.widget import Widget
# from kivy.uix.gridlayout import GridLayout
# from kivy.uix.label import Label
# from kivy.uix.textinput import TextInput
from kivy.properties import NumericProperty, ReferenceListProperty
from kivy.vector import Vector
from kivy.clock import Clock


class PongBall(Widget):
    pass


class PongItens(Widget):
    pass


class PongGame(Widget):
    pass


class PongApp(App):
    def build(self):
        game = PongGame()
        Clock.schedule_interval(game.update, 1.0/60.0)
        return PongGame()


if __name__ == "__main__":
    PongApp().run()
