import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class IsUnique {

  @Test
  public void characterIsUniq() {

    assertEquals(true, IsUnique.checkCharacter("badthug"));
    assertEquals(false, IsUnique.checkCharacter("greattime"));
  }


}
