from kivy.app import App
from kivy.uix.widget import Widget
from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout
# from kivy.uix.behaviors import ButtonBehavior
# from kivy.uix.label import Label
# from kivy.uix.textinput import TextInput
# from kivy.properties import NumericProperty, ReferenceListProperty
# from kivy.vector import Vector
# from kivy.clock import Clock


class MyButton(Widget):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class DotsGame(GridLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        button11 = Button(text='1',
                          background_color=(0, 0, 1, 1),
                          pos=(0, ),
                          size=(10, 200))
        self.add_widget(button11)


class DotsApp(App):
    def build(self):
        game = DotsGame()
        return game


if __name__ == "__main__":
    DotsApp().run()
