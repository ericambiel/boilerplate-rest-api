import { container, DependencyContainer, InjectionToken } from 'tsyringe';
import cloneDeep from 'lodash.clonedeep';
import ConsoleLog from '@libs/ConsoleLog';

export default abstract class ContainerManagerHelper {
  private readonly childContainer: DependencyContainer;

  protected constructor() {
    this.childContainer = container.createChildContainer();
  }

  protected get container(): DependencyContainer {
    return this.childContainer;
  }

  /**
   * Clone instance.
   * @param fromInstanceId Registered instance ID in childContainer
   * @param registerInstanceId New instance ID to be registered on Axios container
   */
  cloneInstance<T>(fromInstanceId: string, registerInstanceId: string): T {
    try {
      // TODO: Need more tests, used in cloned Axios instance and when calling the function of instance,
      //  return to the function of the "original" one .Use clone from lodash instead of cloneDeep
      const newInstance = cloneDeep(
        this.childContainer.resolve<T>(fromInstanceId),
      );

      this.childContainer.registerInstance(registerInstanceId, newInstance);

      return newInstance;
    } catch (err) {
      throw ConsoleLog.print(
        `Instance is not found in container: ${(<Error>err).message}`,
        'error',
        'CONTAINNERMANAGER',
      );
    }
  }

  protected getInstance<T>(token: InjectionToken<T>) {
    if (!this.childContainer.isRegistered(token))
      throw ConsoleLog.print(
        `Instance is not found in container: ${token.toString()}`,
        'error',
        'CONTAINNERMANAGER',
      );

    return this.childContainer.resolve(token);
  }
}
