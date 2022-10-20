import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategories1666232199091 implements MigrationInterface {

    
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criamos nossa tabela
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    // Se algo der errado excluímos a tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }
}


