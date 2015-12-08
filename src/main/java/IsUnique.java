import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

private class IsUnique {
  public static boolean checkCharacter(String inputString){
    for(int i = 0 ; i < inputString.length(); i++){
      char character = inputString.charAt(i);
      int count = 0;
      for(int j = 0; j < inputString.length(); j++){
        if(inputString.indexOf(character) != -1){
          count++;
        }
      }
      if(count > 1){
        return false;
      }
    }
    return true;
  }
}
