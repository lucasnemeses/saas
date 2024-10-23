import { AbilityBuilder } from '@casl/ability'
import { AppAbility } from '.'
import { Role } from './roles'

type DefinePermissions = (
  user: unknown,
  builder: AbilityBuilder<AppAbility>
) => void

export const permissions: Record<Role, DefinePermissions> = {
  ADMIN(_, { can }) {
    can('manage', 'all')
  },
  MEMBER(_, { can }) {
    can('create', 'Project')
  },
  BILLING() {},
}
