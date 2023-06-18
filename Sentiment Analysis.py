## Dependencies + NLP Code
from transformers import pipeline
import json

## Dataset
data = ['I actually dont care that yall got sweet creature tonight (just downloaded betterhelp)', 'Replying to @jhansen_9 and @ArmaniWatts23', 'Such a travesty whenever I see YT people I watch promote betterhelp ', '@jacquelinemwood_1 @bmcmuffin @goodrisings @betterhelp @cavalryHappy Saturday night folks!! Hope you all had a great day tomorrow is fathers day dont forget !!! Remember a better tomorrow starts with today ', 'Replying to @businessbarista', 'Totally agree on all three points!Get others to Vote Blue! â€“ Youll feel better!Help others with the voting process! â€“ Youll feel even better! â€“ Thanks', 'this keeps getting better help', 'Replying to @chloespencerdev and @TheWhyOfBri', 'Replying to @BeHereNowNet and @betterhelp', 'Replying to @steebadore', 'ASK RIVELINO"Whats your take on a guy having female friends?"Having a female friend can be good. She canâ€¢ Introduce you to her friendsâ€¢ Give unique female insightsâ€¢ Help you understand women betterâ€¢ Help you understand your own emotionsJust dont develop feelings', 'LEAKED APOLOGY FROM COLLEEN BALLINGER COMING OUT SOON! #ColleenBallinger @ColleenB123 @MirandaSings @betterhelp', 'I never want someone to put me back in a place I work hard to come. I strive everyday to be better help me dont hurt me #HappyFridayEveryone', 'Replying to @Gadawe7 @MoozerTheBlob and 3 others', 'Replying to @Gadawe7 @MoozerTheBlob and 3 others', 'I suffer from anxiety and depression and recently just got help it was one of the best decisions I couldve made. theres so much help out there I know many people use better help which is online so I would suggest looking into that, and if 18+ (I would hope) its up to you!', 'Replying to @Gadawe7 @MoozerTheBlob and 3 others', 'Replying to @Gadawe7 @Pickinmyfro and 3 others', 'Chase Dreams doing an ad for better help and not going to therapy havfwiwoxnaklwejsbdue how does the other two do all of this I love them', 'better help GAGGED #theothertwo', '"If you wanted some of my crops, you could have just asked!" He called, fighting to keep his face straight when the goblins startled."Now I have no food to share. You better help me fix this, if you dont want me go and tell on you to the Forest folk. Or even Tapio himself."']

## Model
specific_model = pipeline(model="finiteautomata/bertweet-base-sentiment-analysis")
specific_model(data)

## Averaging
avgArray = []
splitArray1 = []
splitArray2 = []
tempArray = []
finalArray = []

for i in range (0 , len(specific_model(data))):
    sentiment = specific_model(data)[i]["label"]
    score = specific_model(data)[i]["score"]

    avgArray.append(sentiment)
    avgArray.append(score)

for j in range (0 , len(avgArray) , 2):
    splitArray1.append(avgArray[j])

for k in range (1 , len(avgArray) , 2):
    splitArray2.append(avgArray[k])

def weighting (sem):
    if sem == "POS":
        return 0.67
    elif sem == "NEU":
        return 0.33
    elif sem == "NEG":
        return -0.33

tweetPerDay = 3
cycler = 0
counter = 0

for x in splitArray2:
    tempArray.append(abs((x * 0.33) + weighting (splitArray1 [cycler])))
    counter +=1
    cycler += 1
    if counter >= tweetPerDay:
        tempAvg = sum(tempArray)/len(tempArray)
        finalArray.append(tempAvg)
        tempArray = []
        counter = 0

print (finalArray)