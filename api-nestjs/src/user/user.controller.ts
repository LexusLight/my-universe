import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get("list")
  getUserList(){
    return("fuck");
  }

}
