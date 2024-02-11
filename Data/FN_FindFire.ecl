IMPORT $,STD;
UpperIt(STRING txt) := Std.Str.ToUpperCase(txt);

EXPORT fn_FindFire := MODULE
     SHARED Fire            := $.File_CleanResponders.CleanFireIDX;

     EXPORT By_CityST(STRING23 city_in,STRING2  st_in)      := FUNCTION
           RETURN IF(st_in = '',
                     Fire (city=UpperIt(city_in)),
                     Fire (city=UpperIt(city_in),(state=UpperIt(st_in))));
     END;

     EXPORT By_FIPS(UNSIGNED3 fips_in) := FUNCTION
          RETURN Fire(primaryFIPS=fips_in); 
     END;
END;