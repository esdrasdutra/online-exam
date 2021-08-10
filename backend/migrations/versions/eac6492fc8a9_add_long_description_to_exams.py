"""add long_description to exams

Revision ID: eac6492fc8a9
Revises: 
Create Date: 2021-07-31 14:14:57.038611

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'eac6492fc8a9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
     op.add_column('exams', sa.Column(
        'long_description',
        sa.Text,
        nullable=False,
        server_default='Default exam description'))


def downgrade():
    pass
