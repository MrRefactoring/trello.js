import { z } from 'zod';
import { ActionUpdateCardSchema } from '#/models/actionUpdateCard';
import { ActionCreateCardSchema } from '#/models/actionCreateCard';
import { ActionCreateOrganizationSchema } from '#/models/actionCreateOrganization';
import { ActionCreateListSchema } from '#/models/actionCreateList';
import { ActionCommentCardSchema } from '#/models/actionCommentCard';
import { ActionUpdateListSchema } from '#/models/actionUpdateList';
import { ActionAddToOrganizationBoardSchema } from '#/models/actionAddToOrganizationBoard';
import { ActionCreateBoardSchema } from '#/models/actionCreateBoard';
import { ActionUpdateBoardSchema } from '#/models/actionUpdateBoard';
import { ActionAddAttachmentToCardSchema } from '#/models/actionAddAttachmentToCard';
import { ActionCreateCustomFieldSchema } from '#/models/actionCreateCustomField';
import { ActionAddChecklistToCardSchema } from '#/models/actionAddChecklistToCard';
import { ActionRemoveChecklistFromCardSchema } from '#/models/actionRemoveChecklistFromCard';
import { ActionUpdateOrganizationSchema } from '#/models/actionUpdateOrganization';
import { ActionDeleteAttachmentFromCardSchema } from '#/models/actionDeleteAttachmentFromCard';
import { ActionConvertToCardFromCheckItemSchema } from '#/models/actionConvertToCardFromCheckItem';
import { ActionUpdateCheckItemStateOnCardSchema } from '#/models/actionUpdateCheckItemStateOnCard';
import { ActionAddMemberToCardSchema } from '#/models/actionAddMemberToCard';
import { ActionRemoveMemberFromCardSchema } from '#/models/actionRemoveMemberFromCard';
import { ActionMoveCardToBoardSchema } from '#/models/actionMoveCardToBoard';
import { ActionMoveCardFromBoardSchema } from '#/models/actionMoveCardFromBoard';
import { ActionMoveListToBoardSchema } from '#/models/actionMoveListToBoard';
import { ActionMoveListFromBoardSchema } from '#/models/actionMoveListFromBoard';
import { ActionCopyCardSchema } from '#/models/actionCopyCard';
import { ActionCopyCommentCardSchema } from '#/models/actionCopyCommentCard';
import { ActionDeleteCardSchema } from '#/models/actionDeleteCard';
import { ActionAddMemberToBoardSchema } from '#/models/actionAddMemberToBoard';
import { ActionMakeAdminOfBoardSchema } from '#/models/actionMakeAdminOfBoard';
import { ActionMakeNormalMemberOfBoardSchema } from '#/models/actionMakeNormalMemberOfBoard';
import { ActionUnknownSchema } from '#/models/actionUnknown';

export const ActionSchema = z.union([
  z.discriminatedUnion('type', [
    ActionUpdateCardSchema,
    ActionCreateCardSchema,
    ActionCreateOrganizationSchema,
    ActionCreateListSchema,
    ActionCommentCardSchema,
    ActionUpdateListSchema,
    ActionAddToOrganizationBoardSchema,
    ActionCreateBoardSchema,
    ActionUpdateBoardSchema,
    ActionAddAttachmentToCardSchema,
    ActionCreateCustomFieldSchema,
    ActionAddChecklistToCardSchema,
    ActionRemoveChecklistFromCardSchema,
    ActionUpdateOrganizationSchema,
    ActionDeleteAttachmentFromCardSchema,
    ActionConvertToCardFromCheckItemSchema,
    ActionUpdateCheckItemStateOnCardSchema,
    ActionAddMemberToCardSchema,
    ActionRemoveMemberFromCardSchema,
    ActionMoveCardToBoardSchema,
    ActionMoveCardFromBoardSchema,
    ActionMoveListToBoardSchema,
    ActionMoveListFromBoardSchema,
    ActionCopyCardSchema,
    ActionCopyCommentCardSchema,
    ActionDeleteCardSchema,
    ActionAddMemberToBoardSchema,
    ActionMakeAdminOfBoardSchema,
    ActionMakeNormalMemberOfBoardSchema,
  ]),
  ActionUnknownSchema,
]);

export type Action = z.infer<typeof ActionSchema>;
