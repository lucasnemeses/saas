import { AbilityBuilder } from '@casl/ability'
import { AppAbility } from '.'

type DefinePermissions = (
  user: unknown,
  builder: AbilityBuilder<AppAbility>
) => void
export type Roles = 'admin' | 'member'

export const permissions: Record<Roles, DefinePermissions> = {
  admin(_, { can }) {
    can('manage', 'all')
  },
  member(_, { can }) {
    can('invite', 'User')
    can('create', 'Project')
  },
}
