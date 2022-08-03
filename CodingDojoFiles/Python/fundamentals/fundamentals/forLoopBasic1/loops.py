
# Loop 1 - Prints integers from 0-150
for x in range(0,151):
    print(x)


print("***************************")

# Loop 2 - Prints all the multiples of 5 from 5 to 1000
for y in range(5,1005,5):
    print(y)

print("***********************************")

#loop 3 - print integers 1 to 100. if dvisible by 5 print "Coding" instead, if
# divisible by 10 , Print "Coding Dojo"

for z in range(2,102):
    if z % 10==True:
        print("Coding Dojo")
    elif z % 5 == True:
            print("Coding")
    else:
        print(z-1)


print("***********************")

#loop 4 - add odd integers from 0 to 500,000, then print final sum

sum = 0
for i in range(1,500001,2):
    sum += i
print(sum)


#loop 5 - print pos numbers starting at 2018, counting down by fours

for s in range(2018,0,-4):
    print(s)

''' loop 6
Set three variables: lowNum, highNum, mult. Starting at lowNum
and going through highNum, print only the integers that are
a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3,
the loop should print 3, 6, 9 (on successive lines)
'''

print("*****************************************************")

low = 2
high = 9
mult = 3

for i in range(low,high + 1):
    if i % mult == 0:
        print(i)