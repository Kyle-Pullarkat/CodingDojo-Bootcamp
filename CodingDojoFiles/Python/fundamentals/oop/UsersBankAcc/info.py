class BankAccount:
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
        return f"Balance: {self.balance}"
    def yield_interest(self):
        self.balance += (self.balance * self.int_rate)
        return self


class User:

    def __init__(self, name):
        self.name = name
        self.account={
            #default amounts for checkings and savings
            "checkings" : BankAccount(0.5,500),
            "Savings"   : BankAccount(0.3,1000)
        }
    #function for displaying checkings and savings
    def display_user_balance(self):
        print(f"User: {self.name}, Checking Balance:{self.account['checkings'].display_account_info()}")
        print(f"User: {self.name}, Savings Balance: {self.account['Savings'].display_account_info()}")
        return self


# defining user account // depositing into checkings //displaying user balance
Kyle = User("Kyle")
Kyle.account['checkings'].deposit(250)
Kyle.display_user_balance()

