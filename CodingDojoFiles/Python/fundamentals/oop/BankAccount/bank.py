class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate= int_rate
        self.balance= balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self
    def yield_interest(self):
        self.balance += (self.balance * self.int_rate)
        return self


Kyle=BankAccount(.40,500)
Lexa=BankAccount(.25,500)

Kyle.deposit(100).deposit(25).deposit(100).withdraw(150).yield_interest().display_account_info()
Lexa.deposit(200).deposit(30).withdraw(50).withdraw(75).withdraw(25).withdraw(10).yield_interest().display_account_info()
