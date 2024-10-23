import { z } from 'zod'

import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'

import { allSubject } from './subjects/all'
import { billingSubject } from './subjects/billing'
import { inviteSubject } from './subjects/invite'
import { organizationSubject } from './subjects/organization'
import { permissions } from './permissions'
import { projectSubject } from './subjects/project'
import { User } from './models/user'
import { userSubject } from './subjects/user'

const appAbilitiesSchema = z.union([
  allSubject,
  billingSubject,
  inviteSubject,
  organizationSubject,
  projectSubject,
  userSubject,
])

type AppAbilities = z.infer<typeof appAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for roles ${user.role} not found.`)
  }

  permissions[user.role](user, builder)

  return builder.build()
}
