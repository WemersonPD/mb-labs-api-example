import express from 'express';
import { controller, httpGet, interfaces, request, response } from 'inversify-express-utils';

@controller('/foo')
export class FooController implements interfaces.Controller {
    @httpGet('/')
    // eslint-disable-next-line no-use-before-define
  private index(@request() req: express.Request, @response() res: express.Response) {
    return res.status(200).json({
      foo: 'Foo controller'
    });
  }
}
