import { ApiProperty } from '@nestjs/swagger';
export class UserModel {
  @ApiProperty({
    example: 'bc3b02a2-72a4-401b-bded-2b4f43be926b',
  })
  uuid: string;
}
