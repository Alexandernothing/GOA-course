def zer(end):    #ვქმნით ახალ კოდს
    sum = 0  #შევქმენით ჯამი
    for i in range(end):    #დავწერეთ რიცხვები 0 დან end ამდე (end ს მარცხნივ არაფერი არ უწერია და ამიტომ მანდ 0 იგულისხმება)
        sum += i   #ვთვლით ჯამს
        return(sum)   #დავაბრუნეთჯამი
        
        print(sum)      #ეკრანზე გამოვსახეთ ჯამი
    zer(43)       #end ჩავანაცვლეთ რიცხვით (43)