export class CreateUserDto {
  name: string;
  email: string;
}

export class UserResponseDto {
  id: string;
  name: string;
  isHost: boolean;
  email: string;
}
