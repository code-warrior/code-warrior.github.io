#define BAUD_RATE 9600

void setup() {
   Serial.begin(BAUD_RATE);
}

void loop() {
   // The following two variables are only initialized the
   // first time this loop runs.
   static int data = 0;
   static int volume_speed = 1;

   data += volume_speed;

   // If the data variable calculates a value below 1 or
   // above 127, then it has exceeded its boundaries. Toggle
   // the value of volume_speed between negative values so
   // the calculation on line 13 is decremented and positive
   // values so the calculation is incremented.
   if (data < 1 || data > 127) {
      volume_speed *= -1;
   }

   Serial.write(data);

   // Wait 100th of a second.
   delay(10);
}
