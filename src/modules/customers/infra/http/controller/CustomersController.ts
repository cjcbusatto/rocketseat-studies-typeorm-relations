import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.params;

    // const repository = container.resolve()
    // const service = new CreateCustomerService();
    // const customer = service.execute({ name, email });
    return response.json();
  }
}
