import {Module} from '@nestjs/common'
import {AuthModule} from './authentication/auth.module'
import {CategoryModule} from './category/category.module'
import {ColorModule} from './color/color.module'
import {ProductModule} from './product/product.module'
import {SizeModule} from './size/size.module'
import {UsersModule} from './users/users.module'

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    ColorModule,
    SizeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
