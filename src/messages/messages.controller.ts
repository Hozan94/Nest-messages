import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    //this will be removed
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
