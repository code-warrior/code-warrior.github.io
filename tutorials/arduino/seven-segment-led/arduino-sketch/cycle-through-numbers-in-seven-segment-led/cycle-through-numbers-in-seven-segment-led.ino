/* ******************************************************************************* *\
   This sketch cycles every half second through the numbers 0 – 9, printing each
   number onto a 7-segment LED.

   Parts required
      1 × Arduino Uno
      2 × Breadboard
      1 × 74HC595 shift register
      8 × 150- – 220-ohm resistor
      1 × 0.3" 7-segment LED (Radio Shack 276-075 or equivalent)

   This sketch extends on the shift register tutorial written by Tom Igoe and Carlyn
   Maw at https://www.arduino.cc/en/Tutorial/ShiftOut.
\* ******************************************************************************* */

#define LATCH_PIN         8   // Pin connected to storage register clock (RCLK)
#define DATA_PIN          11  // Pin connected to serial input (SER) [MOSI]
#define CLOCK_PIN         12  // Pin connected to shift register clock (SRCLK) [MISO]
#define AMOUNT_OF_NUMBERS 10  // The total amount of numbers in the byte array
#define ONE_SECOND        1000

void setup(void) {
   pinMode(LATCH_PIN, OUTPUT);
   pinMode(CLOCK_PIN, OUTPUT);
   pinMode(DATA_PIN, OUTPUT);
}

void loop(void) {
   /*
      Each of the decimal (base 10) numbers in the following byte array is converted
      to its 8-bit binary (base 2) equivalent in the `shiftOut` function below (line
      60). The 8-bit number maps to segments in the 7-segment LED that draws a
      number between 0 – 9. For example, the decimal number 6 (line 39) maps to the
      binary number 00000110, which enables the segments B and C, drawing the
      number 1.
   */
   static byte numbers[AMOUNT_OF_NUMBERS] = {
      63,  // The number 0
      6,   // “        ” 1
      91,  // “        ” 2
      79,  // “        ” 3
      102, // “        ” 4
      109, // “        ” 5
      125, // “        ” 6
      7,   // “        ” 7
      127, // “        ” 8
      103  // “        ” 9
   };

   static byte index_in_byte_array = 0;

   // Initiate the process of writing to the shift register.
   digitalWrite(LATCH_PIN, LOW);

   /*
      The shiftOUt function explained at Arduino’s web site:

         https://www.arduino.cc/en/Reference/ShiftOut
   */
   shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, numbers[index_in_byte_array++]);

   // Complete the process of writing to the shift register.
   digitalWrite(LATCH_PIN, HIGH);

   if (index_in_byte_array == AMOUNT_OF_NUMBERS) {
      index_in_byte_array = 0;
   }

   delay(ONE_SECOND / 2);
}
