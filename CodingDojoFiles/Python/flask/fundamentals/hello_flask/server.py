from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response


# this basically makes websiteexample.com/name and it outputs Hello, name
# Example websiteexample.com/Kyle  Output: Hello, Kyle
@app.route('/say/<name>')
def say(name):
    print(name)
    return "Hello, " + name

# this example just outputs: Dojo!
# when you search up websiteexample.com/dojo
@app.route('/dojo')
def ye():
    return 'Dojo!'

# when u type website.com/anyword/5(number of times u want the word to repeat)
# Example website.com/repeat/BungeeGum/5  Output: BungeeGumBungeeGumBungeeGumBungeeGumBungeeGum 
@app.route('/repeat/<string:word>/<int:num>')
def repeat(word,num):
    return word * num



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

