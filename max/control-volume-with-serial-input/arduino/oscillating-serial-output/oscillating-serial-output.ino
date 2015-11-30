#define BAUD_RATE 9600

void setup() {
   Serial.begin(BAUD_RATE);
}

void loop() {
   static int data = 0;
   static int volume_speed = 1;

   data += volume_speed;

   if (data < 1 || data > 127) {
      volume_speed *= -1;
   }

   Serial.write(data);

   delay(10);
}
